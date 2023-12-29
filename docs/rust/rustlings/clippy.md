

### clippy1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/22_clippy/clippy1.rs)
```rust
// clippy1.rs
//
// The Clippy tool is a collection of lints to analyze your code so you can
// catch common mistakes and improve your Rust code.
//
// For these exercises the code will fail to compile when there are clippy
// warnings check clippy's suggestions from the output to solve the exercise.
//
// Execute `rustlings hint clippy1` or use the `hint` watch subcommand for a
// hint.

// I AM NOT DONE

use std::f32;

fn main() {
    // let pi = 3.14f32;
    let pi = f32::consts::PI;
    let radius = 5.00f32;

    let area = pi * f32::powi(radius, 2);

    println!(
        "The area of a circle with radius {:.2} is {:.5}!",
        radius, area
    )
}

```

### clippy2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/22_clippy/clippy2.rs)
```rust
// clippy2.rs
// 
// Execute `rustlings hint clippy2` or use the `hint` watch subcommand for a
// hint.

// I AM NOT DONE

fn main() {
    let mut res = 42;
    let option = Some(12);
    if let Some(x) = option {
        res += x;
    }
    println!("{}", res);
}

```

### clippy3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/22_clippy/clippy3.rs)
```rust
// clippy3.rs
// 
// Here's a couple more easy Clippy fixes, so you can see its utility.
// No hints.

// I AM NOT DONE

#[allow(unused_variables, unused_assignments)]
fn main() {
    let my_option: Option<()> = None;
    if my_option.is_none() {
        my_option.unwrap();
    }

    let my_arr = &[
        -1, -2, -3
        -4, -5, -6
    ];
    println!("My array! Here it is: {:?}", my_arr);

    let my_empty_vec = vec![1, 2, 3, 4, 5].resize(0, 5);
    println!("This Vec is empty, see? {:?}", my_empty_vec);

    let mut value_a = 45;
    let mut value_b = 66;
    // Let's swap these two!
    value_a = value_b;
    value_b = value_a;
    println!("value a: {}; value b: {}", value_a, value_b);
}

```