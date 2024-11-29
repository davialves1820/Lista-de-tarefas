export function dataEHora() {
    const data = new Date().toLocaleDateString("pt-br", {day: "numeric", month: "numeric", year: "numeric"});
    const hora = new Date().toLocaleTimeString("pt-br", {hour: "2-digit", minute: "2-digit"});

    return `${data} às ${hora}`;
}