
const lazyErrorHandler = (responce) => {
    import('./errorPopup/index')
        .then((module) => {
            const errorHandler = new module.default();
            errorHandler.getInstance().show(responce.statusText);
            throw new Error(responce.statusText)
        })
}

export default lazyErrorHandler;