

### generics1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/14_generics/generics1.rs)
```rust
// generics1.rs
//
// This shopping list program isn't compiling! Use your knowledge of generics to
// fix it.
//
// Execute `rustlings hint generics1` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let mut shopping_list: Vec<&str> = Vec::new();
    shopping_list.push("milk");
}

```

### generics2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/14_generics/generics2.rs)
```rust
// generics2.rs
//
// This powerful wrapper provides the ability to store a positive integer value.
// Rewrite it using generics so that it supports wrapping ANY type.
//
// Execute `rustlings hint generics2` or use the `hint` watch subcommand for a
// hint.


struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    pub fn new(value: T) -> Self {
        Wrapper { value }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn store_u32_in_wrapper() {
        assert_eq!(Wrapper::new(42).value, 42);
    }

    #[test]
    fn store_str_in_wrapper() {
        assert_eq!(Wrapper::new("Foo").value, "Foo");
    }
}

```