import { UiSize } from "../../types";
import { AbstractOrgCardGerator } from "./base_organization";

export class SmallOrgCardGerator extends AbstractOrgCardGerator {
    protected get headerSize(): UiSize {
        return "small";
    }

    protected get infoSize(): UiSize {
        return "small";
    }

    protected get popupSize(): UiSize {
        return "small";
    }

    protected get avatarColumnWide(): string {
        return "six";
    }
}
