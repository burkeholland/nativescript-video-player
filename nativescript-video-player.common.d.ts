import { View } from 'ui/core/view';
export declare abstract class Common extends View {
    message: string;
    abstract playVideoWithStreamURL(url: string): void;
    constructor();
}
