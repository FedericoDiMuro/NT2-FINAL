import Vue from 'vue'

Vue.filter('codificado', function(value) {
    let letras = value.toLowerCase().split('')
    let texto = ''
    letras.forEach(element => {
        switch (element) {
            case 'a':
                texto = texto + 'u'
                break;
            case 'e':
                texto = texto + 'o'
                break;
            case 'o':
                texto = texto + 'e'
                break;
            case 'u':
                texto = texto + 'a'
                break;
            default:
                texto = texto + element
                break;
        }
    });
    return texto
})
Vue.filter('mayuscula', function(value) {
    return value.toUpperCase()
})
Vue.filter('minuscula', function(value) {
    return value.toLowerCase()
})
Vue.filter('maymin', function(value) {
    let letras = value.toLowerCase().split('')
    let texto = ''
    for (let i = 0; i < letras.length; i++) {
        if(i%2){
            texto = texto + letras[i].toLowerCase()
        }
        else{
            texto = texto + letras[i].toUpperCase()
        }
    }
    return texto
})
Vue.filter('minmay', function(value) {
    let letras = value.toLowerCase().split('')
    let texto = ''
    for (let i = 0; i < letras.length; i++) {
        if(i%2){
            texto = texto + letras[i].toUpperCase()
        }
        else{
            texto = texto + letras[i].toLowerCase()
        } 
    }
    return texto
})