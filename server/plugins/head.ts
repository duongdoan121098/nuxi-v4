export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        const {head} = html;
        const headReplacement = head.map((h) => {
                return h.replaceAll(
                    `<link rel="stylesheet"`,
                    `<link rel="preload" as="style" onload="this.rel='stylesheet'"`
                )
            }
            // optimize css load, avoid blocking render

        );
        html.head.length = 0;
        html.head = headReplacement;
    });
});