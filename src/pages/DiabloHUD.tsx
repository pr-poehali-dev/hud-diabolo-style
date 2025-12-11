import { useState } from 'react';
import { RpgPanel } from '@/components/ui/rpg-panel';
import { RpgButton } from '@/components/ui/rpg-button';
import { RpgList, RpgListItem } from '@/components/ui/rpg-list';
import { RpgInput } from '@/components/ui/rpg-input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function DiabloHUD() {
  const [selectedQuest, setSelectedQuest] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const quests = [
    { id: 1, title: 'Тёмный лес', progress: 70, level: 'Средний' },
    { id: 2, title: 'Потерянные души', progress: 60, level: 'Сложный' },
    { id: 3, title: 'Древний артефакт', progress: 33, level: 'Легендарный' },
  ];

  const skills = [
    { id: 1, name: 'Удар щитом', cooldown: 0, icon: 'Shield' },
    { id: 2, name: 'Вихрь клинков', cooldown: 25, icon: 'Swords' },
    { id: 3, name: 'Боевой крик', cooldown: 100, icon: 'Volume2' },
    { id: 4, name: 'Прыжок', cooldown: 50, icon: 'Zap' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 text-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-amber-300 font-['Cinzel'] mb-2 tracking-wider">
            RPG UI СИСТЕМА
          </h1>
          <p className="text-amber-600 text-lg">Демонстрация стилизованных компонентов</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Панель с характеристиками */}
          <RpgPanel title="Характеристики" variant="gold" className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: 'Sword', label: 'Сила', value: 247, color: 'text-red-400' },
                { icon: 'Zap', label: 'Ловкость', value: 189, color: 'text-yellow-400' },
                { icon: 'Brain', label: 'Интеллект', value: 95, color: 'text-blue-400' },
                { icon: 'Heart', label: 'Живучесть', value: 312, color: 'text-green-400' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded bg-stone-950/50 border border-amber-800/30 hover:border-amber-600/50 transition-all"
                >
                  <Icon name={stat.icon as any} className={`${stat.color} mx-auto mb-2`} size={28} />
                  <p className="text-2xl font-bold text-amber-100">{stat.value}</p>
                  <p className="text-xs text-amber-600 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-red-400">Здоровье</span>
                  <span className="text-sm font-bold text-amber-200">3240 / 4500</span>
                </div>
                <Progress value={72} className="h-3 bg-red-950 border border-red-800" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-400">Мана</span>
                  <span className="text-sm font-bold text-amber-200">580 / 800</span>
                </div>
                <Progress value={72.5} className="h-3 bg-blue-950 border border-blue-800" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-400">Опыт до 48 уровня</span>
                  <span className="text-sm font-bold text-amber-200">45670 / 52000</span>
                </div>
                <Progress value={88} className="h-3 bg-amber-950 border border-amber-800" />
              </div>
            </div>
          </RpgPanel>

          {/* Панель кнопок */}
          <RpgPanel title="Действия" variant="bronze">
            <div className="space-y-3">
              <RpgButton variant="primary" size="lg" className="w-full">
                <Icon name="Play" size={18} className="inline mr-2" />
                Начать квест
              </RpgButton>
              <RpgButton variant="success" size="md" className="w-full">
                <Icon name="Save" size={18} className="inline mr-2" />
                Сохранить игру
              </RpgButton>
              <RpgButton variant="secondary" size="md" className="w-full">
                <Icon name="Package" size={18} className="inline mr-2" />
                Инвентарь
              </RpgButton>
              <RpgButton variant="danger" size="md" className="w-full">
                <Icon name="LogOut" size={18} className="inline mr-2" />
                Выйти
              </RpgButton>
            </div>

            <div className="mt-6">
              <RpgInput label="Поиск предмета" placeholder="Введите название..." />
            </div>
          </RpgPanel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Список квестов */}
          <RpgPanel title="Активные квесты" variant="dark">
            <RpgList>
              {quests.map((quest) => (
                <RpgListItem
                  key={quest.id}
                  active={selectedQuest === quest.id}
                  onClick={() => setSelectedQuest(quest.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-amber-200 flex items-center gap-2">
                      <Icon name="Scroll" size={16} />
                      {quest.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        quest.level === 'Легендарный'
                          ? 'border-amber-500 text-amber-400'
                          : quest.level === 'Сложный'
                          ? 'border-purple-500 text-purple-400'
                          : 'border-blue-500 text-blue-400'
                      }`}
                    >
                      {quest.level}
                    </Badge>
                  </div>
                  <Progress value={quest.progress} className="h-2 bg-stone-950 border border-amber-900/50" />
                  <p className="text-xs text-amber-600 mt-1">Прогресс: {quest.progress}%</p>
                </RpgListItem>
              ))}
            </RpgList>
          </RpgPanel>

          {/* Список умений */}
          <RpgPanel title="Способности" variant="default">
            <RpgList>
              {skills.map((skill) => (
                <RpgListItem
                  key={skill.id}
                  active={selectedSkill === skill.id}
                  onClick={() => setSelectedSkill(skill.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center border-2 border-amber-400 flex-shrink-0">
                      <Icon name={skill.icon as any} size={24} className="text-amber-950" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-amber-200">{skill.name}</h4>
                      {skill.cooldown > 0 ? (
                        <>
                          <Progress
                            value={skill.cooldown}
                            className="h-2 bg-stone-950 border border-red-900/50 mt-1"
                          />
                          <p className="text-xs text-red-400 mt-1">Перезарядка: {skill.cooldown}%</p>
                        </>
                      ) : (
                        <p className="text-xs text-green-400 font-semibold mt-1">✓ Готово к использованию</p>
                      )}
                    </div>
                  </div>
                </RpgListItem>
              ))}
            </RpgList>
          </RpgPanel>
        </div>

        {/* Footer с примером */}
        <RpgPanel title="Пример использования" variant="gold" className="mt-6">
          <div className="text-amber-200 space-y-2 text-sm">
            <p className="font-bold text-amber-300 mb-3">Все компоненты готовы к использованию:</p>
            <ul className="space-y-1 pl-4">
              <li>• <code className="text-amber-400">&lt;RpgPanel&gt;</code> - панели с декоративными рамками (4 варианта)</li>
              <li>• <code className="text-amber-400">&lt;RpgButton&gt;</code> - стилизованные кнопки (4 варианта, 3 размера)</li>
              <li>• <code className="text-amber-400">&lt;RpgList&gt;</code> и <code className="text-amber-400">&lt;RpgListItem&gt;</code> - списки с hover эффектами</li>
              <li>• <code className="text-amber-400">&lt;RpgInput&gt;</code> - поля ввода в RPG стиле</li>
            </ul>
          </div>
        </RpgPanel>
      </div>
    </div>
  );
}
