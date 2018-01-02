export default function rootMiddleWare( store ) {
    return function(next) {
        return function(action) {
            let result = next(action);

            return result
        }
    }
}