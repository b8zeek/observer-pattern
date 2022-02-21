class Subscribable {
    subscribers = new Set()

    constructor() {}

    subscribe(callback) {
        this.subscribers.add(callback)

        return () => {
            this.subscribers.delete(callback)
        }
    }

    publish(message) {
        this.subscribers.forEach(callback => callback(message))
    }
}

const subscribable = new Subscribable()

const unsubscribe = subscribable.subscribe(console.log)

subscribable.publish('Hello')
subscribable.publish('World')

unsubscribe()

subscribable.publish('!!!')