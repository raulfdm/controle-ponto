class Bind {

    constructor(model, view, ...params) {
        let proxy = ProxyFactory.create(model, params, model => view.update(model));
        view.update(model);

        return proxy;
    }
}


