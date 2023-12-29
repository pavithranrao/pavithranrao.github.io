

### variables1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables1.rs)
```rust
// variables1.rs
//
// Make me compile!
//
// Execute `rustlings hint variables1` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let x = 5;
    println!("x has the value {}", x);
}

```

### variables2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables2.rs)
```rust
// variables2.rs
//
// Execute `rustlings hint variables2` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let x : i32 = 10;
    if x == 10 {
        println!("x is ten!");
    } else {
        println!("x is not ten!");
    }
}

```

### variables3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables3.rs)
```rust
// variables3.rs
//
// Execute `rustlings hint variables3` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let x: i32 = 42;
    println!("Number {}", x);
}

```

### variables4.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables4.rs)
```rust
// variables4.rs
//
// Execute `rustlings hint variables4` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let mut x = 3;
    println!("Number {}", x);
    x = 5; // don't change this line
    println!("Number {}", x);
}

```

### variables5.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables5.rs)
```rust
// variables5.rs
//
// Execute `rustlings hint variables5` or use the `hint` watch subcommand for a
// hint.


fn main() {
    let number = "T-H-R-E-E"; // don't change this line
    println!("Spell a Number : {}", number);
    let number = 3; // don't rename this variable
    println!("Number plus two is : {}", number + 2);
}

```

### variables6.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/01_variables/variables6.rs)
```rust
// variables6.rs
//
// Execute `rustlings hint variables6` or use the `hint` watch subcommand for a
// hint.


const NUMBER: i32 = 3;
fn main() {
    println!("Number {}", NUMBER);
}

```