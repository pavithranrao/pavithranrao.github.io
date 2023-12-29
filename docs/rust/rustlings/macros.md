

### macros1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/21_macros/macros1.rs)
```rust
// macros1.rs
//
// Execute `rustlings hint macros1` or use the `hint` watch subcommand for a
// hint.


macro_rules! my_macro {
    () => {
        println!("Check out my macro!");
    };
}

fn main() {
    my_macro!();
}

```

### macros2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/21_macros/macros2.rs)
```rust
// macros2.rs
//
// Execute `rustlings hint macros2` or use the `hint` watch subcommand for a
// hint.


macro_rules! my_macro {
    () => {
        println!("Check out my macro!");
    };
}

fn main() {
    my_macro!();
}

```

### macros3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/21_macros/macros3.rs)
```rust
// macros3.rs
//
// Make me compile, without taking the macro out of the module!
//
// Execute `rustlings hint macros3` or use the `hint` watch subcommand for a
// hint.


#[macro_use]
mod macros {
    macro_rules! my_macro {
        () => {
            println!("Check out my macro!");
        };
    }
}

fn main() {
    my_macro!();
}

```

### macros4.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/21_macros/macros4.rs)
```rust
// macros4.rs
//
// Execute `rustlings hint macros4` or use the `hint` watch subcommand for a
// hint.


#[rustfmt::skip]
macro_rules! my_macro {
    () => {
        println!("Check out my macro!");
    };
    ($val:expr) => {
        println!("Look at this other macro: {}", $val);
    };
}

fn main() {
    my_macro!();
    my_macro!(7777);
}

```