export class OverlayContainer {
    static instance: OverlayContainer;
    static isCreating: boolean = false;

    public static getInstance() {
        if (OverlayContainer.instance == null) {
            OverlayContainer.isCreating = true;
            OverlayContainer.instance = new OverlayContainer();
            OverlayContainer.instance.containerDom = document.createElement('div');
            OverlayContainer.instance.containerDom.className = 'cdk-overlay-container';
            document.body.appendChild(OverlayContainer.instance.containerDom);
            OverlayContainer.isCreating = false;
        }

        return OverlayContainer.instance;
    }

    containerDom: any;
    constructor() {
        if (!OverlayContainer.isCreating) {
            throw new Error('只能存在一个实例');
        }
    }
}
