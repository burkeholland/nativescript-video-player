import { Common } from './nativescript-video-player.common';
export declare class VideoPlayer extends Common {
    private _videoViewController;
    private _ios;
    constructor();
    playVideoWithStreamURL(url: string): void;
}
