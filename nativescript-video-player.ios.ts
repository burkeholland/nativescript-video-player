import {Common} from './nativescript-video-player.common';

declare var VKVideoViewController;

export class VideoPlayer extends Common {
    private _videoViewController: any; // VKVideoViewController
    private _ios: any;

    constructor() {
        super();
        this._videoViewController = VKVideoViewController.alloc().init();
    }

    playVideoWithStreamURL(url: string): void {
        this._videoViewController.playVideoWithStreamURL(url);
    }
}