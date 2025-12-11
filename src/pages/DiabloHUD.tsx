import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CharacterStats {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  experience: number;
  maxExperience: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  vitality: number;
}

interface Skill {
  id: number;
  name: string;
  icon: string;
  cooldown: number;
  maxCooldown: number;
  hotkey: string;
}

interface Quest {
  id: number;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  rewards: string;
}

interface InventoryItem {
  id: number;
  name: string;
  type: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  slot?: string;
}

export default function DiabloHUD() {
  const [character] = useState<CharacterStats>({
    name: 'Варвар Теней',
    level: 47,
    health: 3240,
    maxHealth: 4500,
    mana: 580,
    maxMana: 800,
    experience: 45670,
    maxExperience: 52000,
    strength: 247,
    dexterity: 189,
    intelligence: 95,
    vitality: 312,
  });

  const [skills] = useState<Skill[]>([
    { id: 1, name: 'Удар щитом', icon: 'Shield', cooldown: 0, maxCooldown: 5, hotkey: '1' },
    { id: 2, name: 'Вихрь клинков', icon: 'Swords', cooldown: 2, maxCooldown: 8, hotkey: '2' },
    { id: 3, name: 'Боевой крик', icon: 'Volume2', cooldown: 0, maxCooldown: 12, hotkey: '3' },
    { id: 4, name: 'Прыжок', icon: 'Zap', cooldown: 5, maxCooldown: 10, hotkey: '4' },
    { id: 5, name: 'Ярость', icon: 'Flame', cooldown: 0, maxCooldown: 15, hotkey: 'Q' },
    { id: 6, name: 'Зелье здоровья', icon: 'Heart', cooldown: 0, maxCooldown: 30, hotkey: 'E' },
  ]);

  const [quests] = useState<Quest[]>([
    {
      id: 1,
      title: 'Тёмный лес',
      description: 'Убить всех демонов в Тёмном лесу',
      progress: 7,
      maxProgress: 10,
      rewards: '+2500 опыта, Редкий меч',
    },
    {
      id: 2,
      title: 'Потерянные души',
      description: 'Освободить 5 заключённых душ',
      progress: 3,
      maxProgress: 5,
      rewards: '+1800 опыта, Золото',
    },
    {
      id: 3,
      title: 'Древний артефакт',
      description: 'Найти осколки древнего амулета',
      progress: 1,
      maxProgress: 3,
      rewards: '+3000 опыта, Легендарный амулет',
    },
  ]);

  const [inventory] = useState<InventoryItem[]>([
    { id: 1, name: 'Проклятый меч', type: 'Оружие', rarity: 'epic', slot: 'weapon' },
    { id: 2, name: 'Драконья броня', type: 'Броня', rarity: 'legendary', slot: 'chest' },
    { id: 3, name: 'Зелье маны', type: 'Расходник', rarity: 'common' },
    { id: 4, name: 'Кольцо силы', type: 'Аксессуар', rarity: 'rare', slot: 'ring1' },
    { id: 5, name: 'Руны защиты', type: 'Руна', rarity: 'uncommon' },
    { id: 6, name: 'Амулет огня', type: 'Аксессуар', rarity: 'epic', slot: 'amulet' },
  ]);

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'text-gray-400',
      uncommon: 'text-green-400',
      rare: 'text-blue-400',
      epic: 'text-purple-400',
      legendary: 'text-amber-400',
    };
    return colors[rarity as keyof typeof colors] || 'text-gray-400';
  };

  const getRarityBorder = (rarity: string) => {
    const borders = {
      common: 'border-gray-600',
      uncommon: 'border-green-500',
      rare: 'border-blue-500',
      epic: 'border-purple-500',
      legendary: 'border-amber-400',
    };
    return borders[rarity as keyof typeof borders] || 'border-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-black text-amber-50 p-4 font-sans">
      <div className="max-w-[1920px] mx-auto">
        {/* Верхняя панель - Характеристики персонажа */}
        <Card className="mb-4 bg-gradient-to-r from-stone-900/90 via-amber-950/80 to-stone-900/90 border-2 border-amber-600/50 shadow-2xl shadow-amber-900/50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-400 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-amber-950" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-amber-300 font-['Cinzel']">{character.name}</h1>
                  <p className="text-amber-500 font-semibold">Уровень {character.level}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-6 px-8">
                <div className="text-center">
                  <Icon name="Sword" className="text-red-400 mx-auto mb-1" size={24} />
                  <p className="text-2xl font-bold text-amber-200">{character.strength}</p>
                  <p className="text-xs text-amber-600 uppercase">Сила</p>
                </div>
                <div className="text-center">
                  <Icon name="Zap" className="text-yellow-400 mx-auto mb-1" size={24} />
                  <p className="text-2xl font-bold text-amber-200">{character.dexterity}</p>
                  <p className="text-xs text-amber-600 uppercase">Ловкость</p>
                </div>
                <div className="text-center">
                  <Icon name="Brain" className="text-blue-400 mx-auto mb-1" size={24} />
                  <p className="text-2xl font-bold text-amber-200">{character.intelligence}</p>
                  <p className="text-xs text-amber-600 uppercase">Интеллект</p>
                </div>
                <div className="text-center">
                  <Icon name="Heart" className="text-green-400 mx-auto mb-1" size={24} />
                  <p className="text-2xl font-bold text-amber-200">{character.vitality}</p>
                  <p className="text-xs text-amber-600 uppercase">Живучесть</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-red-400 flex items-center gap-2">
                    <Icon name="Heart" size={16} /> Здоровье
                  </span>
                  <span className="text-sm font-bold text-amber-200">{character.health} / {character.maxHealth}</span>
                </div>
                <Progress value={(character.health / character.maxHealth) * 100} className="h-4 bg-red-950 border-2 border-red-800" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-blue-400 flex items-center gap-2">
                    <Icon name="Sparkles" size={16} /> Мана
                  </span>
                  <span className="text-sm font-bold text-amber-200">{character.mana} / {character.maxMana}</span>
                </div>
                <Progress value={(character.mana / character.maxMana) * 100} className="h-4 bg-blue-950 border-2 border-blue-800" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                    <Icon name="Star" size={16} /> Опыт
                  </span>
                  <span className="text-sm font-bold text-amber-200">{character.experience} / {character.maxExperience}</span>
                </div>
                <Progress value={(character.experience / character.maxExperience) * 100} className="h-4 bg-amber-950 border-2 border-amber-800" />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Левая панель - Умения */}
          <Card className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 border-2 border-amber-600/50 shadow-xl shadow-amber-900/30">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['Cinzel'] flex items-center gap-2">
                <Icon name="Flame" size={24} />
                Умения
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="relative bg-gradient-to-br from-stone-800 to-stone-900 border-2 border-amber-700/50 rounded-lg p-3 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center border-2 border-amber-400 group-hover:scale-110 transition-transform">
                        <Icon name={skill.icon as any} size={24} className="text-amber-950" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-amber-200">{skill.name}</p>
                        <Badge variant="outline" className="text-xs border-amber-600 text-amber-500">
                          {skill.hotkey}
                        </Badge>
                      </div>
                    </div>
                    {skill.cooldown > 0 ? (
                      <div>
                        <Progress
                          value={((skill.maxCooldown - skill.cooldown) / skill.maxCooldown) * 100}
                          className="h-2 bg-stone-950 border border-red-800"
                        />
                        <p className="text-xs text-red-400 mt-1 text-center">{skill.cooldown}с</p>
                      </div>
                    ) : (
                      <div className="text-xs text-green-400 text-center font-semibold">Готово</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Центральная панель - Инвентарь */}
          <Card className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 border-2 border-amber-600/50 shadow-xl shadow-amber-900/30">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['Cinzel'] flex items-center gap-2">
                <Icon name="Backpack" size={24} />
                Инвентарь
              </h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-amber-500 mb-2 uppercase">Экипировка</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {['weapon', 'chest', 'amulet'].map((slot) => {
                    const item = inventory.find((i) => i.slot === slot);
                    return (
                      <div
                        key={slot}
                        className={`aspect-square bg-stone-950 border-2 ${
                          item ? getRarityBorder(item.rarity) : 'border-stone-700'
                        } rounded-lg flex flex-col items-center justify-center p-2 hover:border-amber-500 transition-all cursor-pointer group`}
                      >
                        {item ? (
                          <>
                            <Icon name="Package" size={24} className={getRarityColor(item.rarity)} />
                            <p className={`text-xs mt-1 ${getRarityColor(item.rarity)} font-semibold text-center`}>
                              {item.name}
                            </p>
                          </>
                        ) : (
                          <Icon name="Circle" size={24} className="text-stone-700" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <Separator className="bg-amber-800/30 mb-4" />

              <h3 className="text-sm font-semibold text-amber-500 mb-2 uppercase">Предметы</h3>
              <div className="grid grid-cols-4 gap-2">
                {inventory.map((item) => (
                  <div
                    key={item.id}
                    className={`aspect-square bg-stone-950 border-2 ${getRarityBorder(
                      item.rarity
                    )} rounded-lg flex flex-col items-center justify-center p-1 hover:scale-105 hover:shadow-lg transition-all cursor-pointer group`}
                  >
                    <Icon name="Package" size={20} className={getRarityColor(item.rarity)} />
                    <p className={`text-[10px] mt-1 ${getRarityColor(item.rarity)} font-semibold text-center`}>
                      {item.name}
                    </p>
                  </div>
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="aspect-square bg-stone-950 border-2 border-stone-700 rounded-lg flex items-center justify-center hover:border-amber-700 transition-all"
                  >
                    <Icon name="Circle" size={20} className="text-stone-700" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Правая панель - Квесты и Карта */}
          <div className="space-y-4">
            {/* Квесты */}
            <Card className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 border-2 border-amber-600/50 shadow-xl shadow-amber-900/30">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['Cinzel'] flex items-center gap-2">
                  <Icon name="Scroll" size={24} />
                  Квесты
                </h2>
                <div className="space-y-3">
                  {quests.map((quest) => (
                    <div
                      key={quest.id}
                      className="bg-gradient-to-r from-stone-800 to-stone-900 border-2 border-amber-700/50 rounded-lg p-3 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-bold text-amber-200">{quest.title}</h3>
                        <Badge className="bg-amber-700 text-amber-100 text-xs">
                          {quest.progress}/{quest.maxProgress}
                        </Badge>
                      </div>
                      <p className="text-xs text-amber-500 mb-2">{quest.description}</p>
                      <Progress
                        value={(quest.progress / quest.maxProgress) * 100}
                        className="h-2 bg-stone-950 border border-amber-800 mb-2"
                      />
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <Icon name="Trophy" size={12} />
                        {quest.rewards}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Мини-карта */}
            <Card className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 border-2 border-amber-600/50 shadow-xl shadow-amber-900/30">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-amber-300 mb-4 font-['Cinzel'] flex items-center gap-2">
                  <Icon name="Map" size={24} />
                  Карта
                </h2>
                <div className="relative w-full aspect-square bg-stone-950 border-2 border-amber-700 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-stone-900/50" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-amber-500 rounded-full" />
                  <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-green-500 rounded-full" />
                  
                  <div className="absolute bottom-2 left-2 text-xs text-amber-500 bg-stone-950/80 px-2 py-1 rounded border border-amber-700">
                    Тёмный лес
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
