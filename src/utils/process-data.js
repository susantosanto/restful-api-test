export const processData = (data) => {
    const lines = data.split('\n');
    const headers = lines[0].split('|');
    const result = [];

    for (let i = 1; i <= lines.length; i++) {
        const values = lines[i].split("|");
        if (values.length === headers.length) {
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            result.push(obj);
        }
    }
    return result;
}