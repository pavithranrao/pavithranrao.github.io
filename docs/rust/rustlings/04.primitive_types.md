

### primitive_types1.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types1.rs)
```rust
// primitive_types1.rs
//
// Fill in the rest of the line that has code missing! No hints, there's no
// tricks, just get used to typing these :)


fn main() {
    // Booleans (`bool`)

    let is_morning = true;
    if is_morning {
        println!("Good morning!");
    }

    let is_evening = ! is_morning;// Finish the rest of this line like the example! Or make it be false!
    if is_evening {
        println!("Good evening!");
    }
}

```

### primitive_types2.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types2.rs)
```rust
// primitive_types2.rs
//
// Fill in the rest of the line that has code missing! No hints, there's no
// tricks, just get used to typing these :)


fn main() {
    // Characters (`char`)

    // Note the _single_ quotes, these are different from the double quotes
    // you've been seeing around.
    let my_first_initial = 'C';
    if my_first_initial.is_alphabetic() {
        println!("Alphabetical!");
    } else if my_first_initial.is_numeric() {
        println!("Numerical!");
    } else {
        println!("Neither alphabetic nor numeric!");
    }

    let your_character = '🦀'; // Finish this line like the example! What's your favorite character?
    // Try a letter, try a number, try a special character, try a character
    // from a different language than your own, try an emoji!
    if your_character.is_alphabetic() {
        println!("Alphabetical!");
    } else if your_character.is_numeric() {
        println!("Numerical!");
    } else {
        println!("Neither alphabetic nor numeric!");
    }
}

```

### primitive_types3.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types3.rs)
```rust
// primitive_types3.rs
//
// Create an array with at least 100 elements in it where the ??? is.
//
// Execute `rustlings hint primitive_types3` or use the `hint` watch subcommand
// for a hint.


fn main() {
    // let a = ["Are we there yet?"; 100];
    let a = 1..101;

    if a.len() >= 100 {
        println!("Wow, that's a big array!");
    } else {
        println!("Meh, I eat arrays like that for breakfast.");
        panic!("Array not big enough, more elements needed")
    }
}

```

### primitive_types4.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types4.rs)
```rust
// primitive_types4.rs
//
// Get a slice out of Array a where the ??? is so that the test passes.
//
// Execute `rustlings hint primitive_types4` or use the `hint` watch subcommand
// for a hint.


#[test]
fn slice_out_of_array() {
    let a = [1, 2, 3, 4, 5];

    let nice_slice = &a[1..4];

    assert_eq!([2, 3, 4], nice_slice)
}

```

### primitive_types5.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types5.rs)
```rust
// primitive_types5.rs
//
// Destructure the `cat` tuple so that the println will work.
//
// Execute `rustlings hint primitive_types5` or use the `hint` watch subcommand
// for a hint.


fn main() {
    let cat: (&str, f32) = ("Furry McFurson", 3.5);
    let (name, age) : (&str, f32) = cat;

    println!("{} is {} years old.", name, age);
}

```

### primitive_types6.rs

[Github solution link](https://github.com/pavithranrao/rustlings/blob/main/exercises/04_primitive_types/primitive_types6.rs)
```rust
// primitive_types6.rs
//
// Use a tuple index to access the second element of `numbers`. You can put the
// expression for the second element where ??? is so that the test passes.
//
// Execute `rustlings hint primitive_types6` or use the `hint` watch subcommand
// for a hint.


#[test]
fn indexing_tuple() {
    let numbers = (1, 2, 3);
    // Replace below ??? with the tuple indexing syntax.
    let second = numbers.1;

    assert_eq!(2, second,
        "This is not the 2nd number in the tuple!")
}

```