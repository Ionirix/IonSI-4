export interface ExampleRecord {
  id: string;
  label: string;
}

export function makeExampleRecord(id: string, label: string): ExampleRecord {
  return { id, label };
}