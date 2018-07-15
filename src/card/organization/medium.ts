import { UiSize } from "../../types";
import { AbstractOrgCardGerator } from "./base_organization";

export class MediumOrgCardGerator extends AbstractOrgCardGerator {
    protected get headerSize(): UiSize {
        return "large";
    }

    protected get infoSize(): UiSize {
        return "medium";
    }

    protected get popupSize(): UiSize {
        return "medium";
    }

    protected get avatarColumnWide(): string {
        return "eight";
    }
}
