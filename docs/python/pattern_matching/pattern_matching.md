# Pattern Matching in Python

[PEP-0636](https://peps.python.org/pep-0636/#matching-sequences)

## Matching a python builtin type


```python
def fib(n: int):
    match n:
        case 0:
            return 0
        case 1:
            return 1
        case n:
            return fib(n - 1) + fib(n - 2)

fib(10)

```




    55



## Matching a python list


```python
def sum_list(xs: list[int]) -> int:
    match xs:
        case [x]:
            return x
        case [x, *ys]:
            return x + sum_list(ys)

assert(
    sum_list(list(range(10))) == sum(range(10))
)
```

## Matching Python enums


```python
from datetime import date
import enum
class Weekday(enum.Enum):
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7



def is_day_a_weekend(day: Weekday):
    match day:
        case Weekday.SATURDAY | Weekday.SUNDAY:
            print(f"Yippee it's {day.name}!")
        case _:
            print(f"We are {6 - day.value} day(s) away from Saturday")

is_day_a_weekend(Weekday.FRIDAY)
is_day_a_weekend(Weekday.SATURDAY)

```

    We are 1 day(s) away from Saturday
    Yippee it's SATURDAY!


## Matching with multiple predicates and wildcards
[Fizz-Buzz program](https://leetcode.com/problems/fizz-buzz/)


```python
def fizz_buzz(n: int) -> str:
    """
    num == "FizzBuzz" if num is divisible by 3 and 5.
    num == "Fizz" if num is divisible by 3.
    num == "Buzz" if num is divisible by 5.
    num == num (as a string) if none of the above conditions are true.

    Args:
        n (int): A positive integer.

    Returns:
        str: FizzBUzz string for the num.
    """
    match (n % 3, n % 5):
        case (0, 0):
            return "FizzBuzz"
        case (0, _):
            return "Fizz"
        case (_, 0):
            return "Buzz"
        case _:
            return str(n)

for num in range(10, 16):
    print(f"{num=} {fizz_buzz(num)}")
```

    num=10 Buzz
    num=11 11
    num=12 Fizz
    num=13 13
    num=14 14
    num=15 FizzBuzz



```python
from collections import namedtuple
Point = namedtuple("Point", "x y")
point = Point(2, 4)

match point:
    case Point(x=a, y=b):
        print(a, b)
    case _:
        print("nope!")
```

    2 4



```python
data = {"b": 20, "a": 10}
match data:
    case {"a": a, **others}:
        print(a)
    case {"b": b, **others}:
        print(b)
    case _:
        print(data)
```

    10



```python
import requests

response = requests.get("https://pavithranrao.github.io")
match response.status_code:
    case 200:
        print(len(response.content))
    case x if x >= 400:
        print(f"HTTPError: {response.reason}")
    case _:
        print(response)
```

    18586


## Matching a Python class or dataclass


```python
import dataclasses

@dataclasses.dataclass
class Command:
    command_type: str
    command_args: list[str]

def perform_fn(command: Command):
    match command:
        case Command(command_type, command_args) if command_type == "echo":
            print(command_args[0])
        case _:
            print("unimplemented command!")

echo = Command(
    command_type="echo",
    command_args=["Hello, World!"]
)
perform_fn(echo)
```

    Hello, World!


## End Note

I also found these blogs useful:

- [Ben Hoyt's Structural pattern matching in Python 3.10](https://benhoyt.com/writings/python-pattern-matching/)
- [Inspired Python's Mastering Structural Pattern Matching](https://www.inspiredpython.com/course/pattern-matching/mastering-structural-pattern-matching)
