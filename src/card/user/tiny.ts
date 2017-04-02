import {UiSize} from "../../types";
import {AbstractUserCardGerator} from "./base_user";


export class TinyUserCardGerator extends AbstractUserCardGerator {
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

    protected createUserInfoList(): HTMLElement {
        return this._createInfoList({
            "company": true,
            "location": true,
        });
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

    protected createOrganizations(): HTMLElement {
        return null;
    }
}
