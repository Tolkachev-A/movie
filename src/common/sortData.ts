import {MovieDataType} from "../stor/moviePageReducer";

export function sortData(arrayData: any, arrayOfSortData: any): MovieDataType {
    let arrValue = arrayData.reduce((acc: any, item: any) => {
        acc = [...acc, item.value]
        return acc
    }, [])

    let newData = {} as MovieDataType
    for (let i = 0; i < arrValue.length; i++) {
        for (let j = 0; j < arrayOfSortData.length; j++) {
            let res = arrValue[i][arrayOfSortData[j]]
            if (res) {
                if (arrayOfSortData[j] === 'wikipedia') {
                    newData = {
                        ...newData,
                        [arrayOfSortData[j]]: {
                            imDbId: arrValue[i][arrayOfSortData[j]].imDbId,
                            plainText: arrValue[i][arrayOfSortData[j]].plotShort.plainText
                        }
                    }
                } else {
                    newData = {...newData, [arrayOfSortData[j]]: arrValue[i][arrayOfSortData[j]]}
                }


            }
        }
    }

    return newData
}