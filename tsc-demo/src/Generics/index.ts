class KeyValue<T> {
    constructor(public key: T, public value: string) { }
}

let keyB = new KeyValue<number>(3, 'a')
keyB.key.toFixed(2)


// function generics

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}

let s = ArrayUtils.wrapInArray(2)

// interface generics
interface Result<T> {
    data: T | null,
    error: string | null
}

interface User {
    username: string
}

interface Product {
    title: string
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null }
}

let result = fetch<Product>('url')
result.data?.title

//
interface PersonObj {
    name: string | null
}

function echo<T extends PersonObj>(value: T): T {
    return value
}

echo({ name: 'a', })

// type Mapping 
interface Proddd {
    name: string
    price: number
}

type ReadOnlyProduct = {
    [P in keyof Proddd]: Proddd[P]
}

// Utility Types 

// Partial => hamsini optional edir
// Required => hamsini vacib edir 

// Exercies 

//1

function echos<T>(value: T): T {
    return value
}

//2 

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name)
}



