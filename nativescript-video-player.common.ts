import * as app from 'application';
import * as dialogs from 'ui/dialogs';
import { View } from 'ui/core/view';

export abstract class Common extends View {
  public message: string;

  public abstract playVideoWithStreamURL(url: string): void;

  constructor() {
    super();
  }
}

