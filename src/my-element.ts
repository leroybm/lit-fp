import {html, LitElement, PropertyValues, unsafeCSS} from 'lit'
import {customElement} from 'lit/decorators.js'
import {createRef, Ref, ref} from 'lit/directives/ref.js'

import fpCss from "fluid-player/src/css/fluidplayer.css?inline";

@customElement('my-element')
export class MyElement extends LitElement {

  static styles = unsafeCSS(fpCss);

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    mode: 'open',
    delegatesFocus: true
  };

  fp: Function | null = null;
  ref: Ref<HTMLVideoElement> = createRef();

  render() {
    return html`
        <div style="display: flex; width: 100vw; height: 100vh; align-items: center; justify-content: center;">
          <video ${ref(this.ref)} style="width: 75vw;">
              <source src="https://cdn.fluidplayer.com/videos/valerian-1080p.mkv" data-fluid-hd title="1080p" type="video/mp4"/>
              <source src="https://cdn.fluidplayer.com/videos/valerian-720p.mkv" data-fluid-hd title="720p" type="video/mp4"/>
              <source src="https://cdn.fluidplayer.com/videos/valerian-480p.mkv" title="480p" type="video/mp4"/>
          </video>
        </div>
    `
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    if (!this.fp && this.ref.value) {
      // @ts-ignore
      this.fp = fluidPlayer(this.ref.value)
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
