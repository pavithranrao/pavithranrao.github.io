

### lifetimes1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/16_lifetimes/lifetimes1.rs)
```rust
// lifetimes1.rs
//
// The Rust compiler needs to know how to check whether supplied references are
// valid, so that it can let the programmer know if a reference is at risk of
// going out of scope before it is used. Remember, references are borrows and do
// not own their own data. What if their owner goes out of scope?
//
// Execute `rustlings hint lifetimes1` or use the `hint` watch subcommand for a
// hint.


fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("abcd");
    let string2 = "xyz";
    let result = longest(string1.as_str(), string2);
    println!("The longest string is '{}'", result);

}

```

### lifetimes2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/16_lifetimes/lifetimes2.rs)
```rust
// lifetimes2.rs
//
// So if the compiler is just validating the references passed to the annotated
// parameters and the return type, what do we need to change?
//
// Execute `rustlings hint lifetimes2` or use the `hint` watch subcommand for a
// hint.


fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string is long");
    let result: &str;
    let string2;
    {
        string2 = String::from("xyz");
        result = longest(string1.as_str(), string2.as_str());
    }
    println!("The longest string is '{}'", result);
}

```

### lifetimes3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/16_lifetimes/lifetimes3.rs)
```rust
// lifetimes3.rs
//
// Lifetimes are also needed when structs hold references.
//
// Execute `rustlings hint lifetimes3` or use the `hint` watch subcommand for a
// hint.


struct Book<'a> {
    author: &'a str,
    title: &'a str,
}

fn main() {
    let name = String::from("Jill Smith");
    let title = String::from("Fish Flying");
    let book = Book { author: &name, title: &title };

    println!("{} by {}", book.title, book.author);
}

```