function createSubscribable() {
    const subscribers = new Set()

    return {
        subscribe(callback) {
            subscribers.add(callback)

            return () => subscribers.delete(callback)
        },

        publish(message) {
            subscribers.forEach(callback => callback(message))
        }
    }
}

const subscribable = createSubscribable()

const unsubscribe = subscribable.subscribe(console.log)

subscribable.publish('Hello')
subscribable.publish('World')

unsubscribe()

subscribable.publish('!!!')