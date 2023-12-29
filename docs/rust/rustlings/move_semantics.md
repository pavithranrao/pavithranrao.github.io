

### move_semantics1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics1.rs)
```rust
// move_semantics1.rs
//
// Execute `rustlings hint move_semantics1` or use the `hint` watch subcommand
// for a hint.


#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}

```

### move_semantics2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics2.rs)
```rust
// move_semantics2.rs
//
// Make the test pass by finding a way to keep both Vecs separate!
//
// Execute `rustlings hint move_semantics2` or use the `hint` watch subcommand
// for a hint.


#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0.clone());

    assert_eq!(vec0, vec![22, 44, 66]);
    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(mut vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}

```

### move_semantics3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics3.rs)
```rust
// move_semantics3.rs
//
// Make me compile without adding new lines -- just changing existing lines! (no
// lines with multiple semicolons necessary!)
//
// Execute `rustlings hint move_semantics3` or use the `hint` watch subcommand
// for a hint.


#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(mut vec: Vec<i32>) -> Vec<i32> {
    vec.push(88);

    vec
}

```

### move_semantics4.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics4.rs)
```rust
// move_semantics4.rs
//
// Refactor this code so that instead of passing `vec0` into the `fill_vec`
// function, the Vector gets created in the function itself and passed back to
// the main function.
//
// Execute `rustlings hint move_semantics4` or use the `hint` watch subcommand
// for a hint.


#[test]
fn main() {

    let mut vec1 = fill_vec();

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

// `fill_vec()` no longer takes `vec: Vec<i32>` as argument - don't change this!
fn fill_vec() -> Vec<i32> {
    // Instead, let's create and fill the Vec in here - how do you do that?
    let mut vec = vec![22, 44, 66];;

    vec.push(88);

    vec
}

```

### move_semantics5.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics5.rs)
```rust
// move_semantics5.rs
//
// Make me compile only by reordering the lines in `main()`, but without adding,
// changing or removing any of them.
//
// Execute `rustlings hint move_semantics5` or use the `hint` watch subcommand
// for a hint.


#[test]
fn main() {
    let mut x = 100;
    let y = &mut x;
    *y += 100;
    let z = &mut x;
    *z += 1000;

    assert_eq!(x, 1200);
}

```

### move_semantics6.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/06_move_semantics/move_semantics6.rs)
```rust
// move_semantics6.rs
//
// You can't change anything except adding or removing references.
//
// Execute `rustlings hint move_semantics6` or use the `hint` watch subcommand
// for a hint.


fn main() {
    let data = "Rust is great!".to_string();

    get_char(&data);

    string_uppercase(data);
}

// Should not take ownership
fn get_char(data: &String) -> char {
    data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: String) {
    data = data.to_uppercase();

    println!("{}", data);
}

```