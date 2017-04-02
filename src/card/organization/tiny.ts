import {UiSize} from "../../types";
import {AbstractOrgCardGerator} from "./base_organization";


export class TinyOrgCardGerator extends AbstractOrgCardGerator {
    protected get headerSize(): UiSize {
        return "tiny";
    }

    protected get infoSize(): UiSize {
        return "tiny";
    }

    protected get popupSize(): UiSize {
        return "tiny";
    }

    protected get avatarColumnWide(): string {
        return "four";
    }

    protected createPopupInfoList(): HTMLElement {
        return this._createInfoList({
            "email": true,
            "blog": true,
            "created_at": true,
            "updated_at": true,
        }, this.popupSize);
    }

    protected createCardContent(): HTMLElement {
        return this._createCardContentTiny();
    }
}
