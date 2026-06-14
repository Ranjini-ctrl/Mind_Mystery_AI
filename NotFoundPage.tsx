import { useState } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';

const defaultCards = [
  { id: 'clue-1', title: 'Fingerprint Match', details: 'Partial print connects to one suspect.' },
  { id: 'clue-2', title: 'Security Gap', details: 'Camera offline at the time of the incident.' },
  { id: 'clue-3', title: 'Witness Note', details: 'A note mentions a hidden meeting at midnight.' },
  { id: 'clue-4', title: 'Broken Glass', details: 'Shards found near an exit route.' }
];

function EvidenceCard({ id, title, details }: { id: string; title: string; details: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1
  };

  return (
    <div ref={setNodeRef} style={style} className="glass-panel p-5 shadow-xl" {...attributes} {...listeners}>
      <p className="text-sm uppercase tracking-[0.3em] text-accent">Evidence</p>
      <h4 className="mt-3 text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-slate-300">{details}</p>
    </div>
  );
}

export default function EvidenceBoardPage() {
  const [cards, setCards] = useState(defaultCards);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-10">
      <section className="glass-panel p-8">
        <SectionTitle eyebrow="Evidence Board" title="Drag, connect, and organize clues." description="Use the timeline and visual board to bring evidence together." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Timeline View</p>
              <div className="mt-6 space-y-4">
                {cards.map((item, index) => (
                  <div key={item.id} className="rounded-3xl bg-white/5 p-4 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{`Event ${index + 1}`}</p>
                    <p className="mt-2 font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-6 bg-white/5">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Zoom</p>
                <p className="mt-3 text-slate-300">Pinch or use scroll to inspect relationships in the full board.</p>
              </Card>
              <Card className="p-6 bg-white/5">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Connect Clues</p>
                <p className="mt-3 text-slate-300">Build stronger deductions by linking suspects to evidence cards.</p>
              </Card>
            </div>
          </div>
          <div className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Board Controls</p>
            <div className="mt-6 space-y-4">
              <Button className="w-full">Toggle Timeline</Button>
              <Button variant="secondary" className="w-full">View Evidence Map</Button>
              <Button className="w-full">Export Clue Links</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Insight</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Build a connected narrative.</h3>
            <p className="mt-4 text-slate-300">Arrange clues in order, test hypothesis, and mark suspects with strength levels to reveal a cohesive motive.</p>
          </div>
          <DndContext sensors={[]} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={cards.map((item) => item.id)} strategy={verticalListSortingStrategy}>
              <div className="flex flex-col gap-4">
                {cards.map((item) => (
                  <EvidenceCard key={item.id} id={item.id} title={item.title} details={item.details} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </section>
    </div>
  );
}
