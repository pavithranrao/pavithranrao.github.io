

### functions1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/02_functions/functions1.rs)
```rust
// functions1.rs
//
// Execute `rustlings hint functions1` or use the `hint` watch subcommand for a
// hint.


fn call_me() {
    println!("Hello, world!");
}

fn main() {
    call_me();
}

```

### functions2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/02_functions/functions2.rs)
```rust
// functions2.rs
//
// Execute `rustlings hint functions2` or use the `hint` watch subcommand for a
// hint.


fn main() {
    call_me(3);
}

fn call_me(num: i32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}

```

### functions3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/02_functions/functions3.rs)
```rust
// functions3.rs
//
// Execute `rustlings hint functions3` or use the `hint` watch subcommand for a
// hint.


fn main() {
    call_me(/*num=*/5);
}

fn call_me(num: u32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}

```

### functions4.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/02_functions/functions4.rs)
```rust
// functions4.rs
//
// This store is having a sale where if the price is an even number, you get 10
// Rustbucks off, but if it's an odd number, it's 3 Rustbucks off. (Don't worry
// about the function bodies themselves, we're only interested in the signatures
// for now. If anything, this is a good way to peek ahead to future exercises!)
//
// Execute `rustlings hint functions4` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let original_price = 51;
    println!("Your sale price is {}", sale_price(original_price));
}

fn sale_price(price: i32) -> f32 {
    if is_even(price) {
        ((price - 10) as f32) * 0.1
    } else {
        (price - 3) as f32
    }
}

fn is_even(num: i32) -> bool {
    num % 2 == 0
}

```

### functions5.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/02_functions/functions5.rs)
```rust
// functions5.rs
//
// Execute `rustlings hint functions5` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let answer = square(3);
    println!("The square of 3 is {}", answer);
}

fn square(num: i32) -> i32 {
    num * num
}

```