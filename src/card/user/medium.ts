import { UiSize } from "../../types";
import { AbstractUserCardGerator } from "./base_user";

export class MediumUserCardGerator extends AbstractUserCardGerator {
    protected get headerSize(): UiSize {
        return "medium";
    }

    protected get infoSize(): UiSize {
        return "medium";
    }

    protected get popupSize(): UiSize {
        return "medium";
    }

    protected get avatarColumnWide(): string {
        return "nine";
    }
}
