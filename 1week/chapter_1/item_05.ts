let age: number;
age = '12';
// ~~~ Type '"12"' is not assignable to type 'number'
age = '12' as any; // OK
age += 1; // OK; at runtime, age is now "121"

function calculateAge(birthDate: Date): number {
  // COMPRESS
  return 0;
  // END
}

const birthDate: any = '1990-01-19';
calculateAge(birthDate); // OK

// ====================================

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

// ====================================

interface ComponentProps {
  onSelectItem: (item: any) => void;
}

function renderSelector(props: ComponentProps) {
  /* ... */
}

let selectedId = 0;
function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });

interface ComponentProps2 {
  onSelectItem: (id: number) => void;
}

export default {};
