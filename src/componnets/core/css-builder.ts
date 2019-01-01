export function buildClassName(classes: any) {
    const classNames: string[] = [];
    for (const key in classes) {
        if (classes[key]) {
            classNames.push(key);
        }
    }
    return classNames.join(' ');
}
