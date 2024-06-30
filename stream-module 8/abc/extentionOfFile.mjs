const FileExtention = {
    allowedExtentions: ['.txt', '.docx'],

    getFileExtention(nameOfFile1, validation1) {
        const indexOfDotInFileName = nameOfFile1.lastIndexOf('.')
        const extensionName = nameOfFile1.substring(indexOfDotInFileName)
    
        if(validation1){
            if(this.allowedExtentions.includes(extensionName)){
                // все ок =)
                return extensionName
            }else{
                // не ок
                console.log('Created file extention must be in allowed extention.\n',
                `Allowed extentions: ${this.allowedExtentions}`)
                return undefined
            }
        }else if(!validation1){
            return extensionName
        }else{
            console.log('You must be using boollean value in second argument')
            return undefined
        }
    },

    addNewAllowedExtention(extentionName) {
        //нам передали строку, допустим, это будет .js
        // надо проверить, стоит ли точка в начале
        if(extentionName.indexOf('.') === 0){
            console.log(`${extentionName} is passed the validation check`)
            this.allowedExtentions.push(extentionName)
            return extentionName
        }else{
            console.log(`${extentionName} isnt passed the validation check`)
            console.log(`Allowed extentions:\n${this.allowedExtentions}`)
            return 0
        }
    },

    deleteAllowedExtention(extentionName){
        if(this.allowedExtentions.includes(extentionName)){
            const deleteExtentionIndex = this.allowedExtentions.indexOf(extentionName)
            this.allowedExtentions.splice(deleteExtentionIndex, deleteExtentionIndex)
            console.log(`${extentionName} is deleted from allowed extentions`)
            return extentionName
        }else{
            console.log(`${extentionName} уже =) isn't in allowed extentions`)
        }
    },

    isHaveExtention(nameOfFile1){
        const indexOfDotInFileName = nameOfFile1.lastIndexOf('.')
        
        if(indexOfDotInFileName === -1){
            return false
        }else{
            return true
        }
    }
}

// проверка
// console.log(FileExtention.allowedExtentions)
// console.log(FileExtention.addNewAllowedExtention('.fff'))
// console.log(FileExtention.getFileExtention('her.fff', true))
// console.log(FileExtention.allowedExtentions)
// console.log(FileExtention.deleteAllowedExtention('.fff'))
// console.log(FileExtention.allowedExtentions)
// console.log(FileExtention.deleteAllowedExtention('.fff'))

export default FileExtention