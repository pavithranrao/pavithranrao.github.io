
After working a long time in Python, I tend to forget the basic C++ syntax. The document compares the syntax between Python and C++ and can refresh the C++ syntax with little effort.

## Primitive Types

```python
x: int = 10
x: float = 10.1
x: char = 'a' 
x: str = "abc"
x: bool = True
x: None = None
```

```cpp
int x = 10;
float x = 10.1;
char x = 'a';
string x = "abc"; // #include <string.h>
bool x = true;
std::nullptr_t x = nullptr; // #include <cstddef>
```

## Int

Python
```python
# str to int
num = int("10")  # 10

# int to str
number = str(42)    # "42" 
```

C++
```cpp
#include <string>

// string to int
int num = std::stoi("10")      // 10

// int to string
string number = std::to_string(42); // "42"
```

## Float


Python
```python
# str to int
num = float("10.1")  # 10.1

# int to str
number = str(42.24)    # "42.24" 
```

C++
```cpp
#include <string>

// string to int
int num = std::stof("10.1")      // 10.1
double num_double = std::stod("10.1");

// int to string
string number = std::to_string(42.24); // "42.24"
```


### Division and Modulo

Python
```python
quotient, reminder = divmod(10,3)

# quotient = 3, reminder = 1
```


C++
```cpp
auto [quotient, reminder] = std::div(10, 3);

//  quotient = 3, reminder = 1
```

## Char

Python
```python
# int to char
asciiValue: int = 65;
character: str = chr(asciiValue);  # "A"

# char to int (ascii ordinal)
a: str = 'a';
int_a: int = ord(a);                # 97
```

C++
```cpp
// int to char
int asciiValue = 65;
char character = char(asciiValue);  // 'A'

// char to int (ascii ordinal)
char a = 'a';
int int_a = int(a);                // 97
int int_a = (int) a;               // 97
```

## String
> [!info] > `str` in Python is immutable, whereas `string` in C++ is mutable

Python

```python
hello = "Hello"
length: int = len(hello) # 5

char_at_1: chr = hello[1] # 'e'

# check equality
hello == "Hello" # True

# string concatenation
hello + ", " + "World!" # "Hello, World!"

# emptyness check
"" is None # True

# str in list of chars
data = list(hello)     # ['H', 'e', 'l', 'l', 'o']

```

C++

```cpp
#include <string>
#include <vector>

std::string hello = "Hello";
size_t length = hello.length();  // 5
// `hello.size()` also works

// check equality
hello == "Hello"; // true

// string concatenation
hello + ", " + "World!" // "Hello, World!"

char char_at_1 = hello[2]; // 'e'

// emptyness check
std::string emptyString = "";
emptyString.empty() // true

std::vector<char> data(str.begin(), str.end());

// eq
// std::copy(str.begin(), str.end(), std::back_inserter(data));
```


## Bool

Python

```python
a: = True
b: = False

a and b # False
a or b  # True
not a   # False
```


C++

```cpp
bool a = true;
bool b = false;

a and b; // false
a or b;  // true
not a;   // false
```

In `Python`
Source: https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not

| Operation | Result                                     | Notes |
| --------- | ------------------------------------------ | ----- |
| `x or y`  | if _x_ is true, then _x_, else _y_         | (1)   |
| `x and y` | if _x_ is false, then _x_, else _y_        | (2)   |
| `not x`   | if _x_ is false, then `True`, else `False` | (3)   |
Notes:
1. This is a short-circuit operator, so it only evaluates the second argument if the first one is false.
2. This is a short-circuit operator, so it only evaluates the second argument if the first one is true.
3. `not` has a lower priority than non-Boolean operators, so `not a == b` is interpreted as `not (a == b)`, and `a == not b` is a syntax error.

In `C++`

Source: https://en.cppreference.com/w/cpp/language/operator_logical

| Operator name           | Syntax                   | [Over​load​able](https://en.cppreference.com/w/cpp/language/operators "cpp/language/operators") | Prototype examples (for class T)       |                                           |
| ----------------------- | ------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| Inside class definition | Outside class definition |                                                                                                 |                                        |                                           |
| negation                | not a<br><br>!a          | Yes                                                                                             | bool T::operator!() const;             | bool operator!(const T &a);               |
| AND                     | a and b<br><br>a && b    | Yes                                                                                             | bool T::operator&&(const T2 &b) const; | bool operator&&(const T &a, const T2 &b); |
| inclusive OR            | a or b<br><br>a \| b     | Yes                                                                                             | bool T::operator\|(const T2 &b) const; | bool operator\|(const T &a, const T2 &b); |

**Notes**  

- The keyword-like forms (and,or,not) and the symbol-like forms (&&,|,!) can be used interchangeably (see [alternative representations](https://en.cppreference.com/w/cpp/language/operator_alternative "cpp/language/operator alternative")).
- All built-in operators return bool, and most [user-defined overloads](https://en.cppreference.com/w/cpp/language/operators "cpp/language/operators") also return bool so that the user-defined operators can be used in the same manner as the built-ins. However, in a user-defined operator overload, any type can be used as return type (including void).
- Built-in operators `**&&**` and `**|**` perform short-circuit evaluation (do not evaluate the second operand if the result is known after evaluating the first), but overloaded operators behave like regular function calls and always evaluate both operands.

## None vs nullptr

Python's `None` is similar to C++ `nullptr`. C++ `nullptr` is also used to find end of an iterator whereas in Python the iterator terminates with an Exception.