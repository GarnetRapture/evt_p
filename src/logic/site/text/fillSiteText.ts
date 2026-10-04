export function fillSiteText(template: string, values: Readonly<Record<string, string>>): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) => {
    const value = values[key];
    if (value === undefined) throw new Error(`site text value missing: ${key}`);
    return value;
  });
}
