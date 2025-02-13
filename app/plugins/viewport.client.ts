// plugins/viewport.client.ts
export default defineNuxtPlugin(() => {
    const setViewportSize = () => {
        document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`,
        );
        document.documentElement.style.setProperty(
            "--vw",
            `${window.innerWidth * 0.01}px`,
        );
    };
    setViewportSize();
    setTimeout(() => {
        setViewportSize();
    }, 3000)
    window.addEventListener("resize", setViewportSize);
});
