const unitSuffix = 'px'

export interface DomElementsGeneratorOptions {
    itemsAmount: number,
    width: number,
    height: number,
    backgroundColor: string,
    borderRadius: number,
}

export interface DomItemElement {
    width: string,
    height: string,
    backgroundColor: string,
    borderRadius: string,
}

export default function(options: DomElementsGeneratorOptions): DomItemElement[] {
    const items:DomItemElement[] = []

    if (options.itemsAmount > 0){
        Array(options.itemsAmount).fill(0).map((_, i) => i).forEach(() => {
            items.push({
                width: `${options.width}${unitSuffix}`,
                height: `${options.height}${unitSuffix}`,
                backgroundColor: options.backgroundColor,
                borderRadius: `${options.borderRadius}${unitSuffix}`,
            })
        })
    }

    return items

}