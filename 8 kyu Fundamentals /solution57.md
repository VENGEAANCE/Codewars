# Task


# Solution

```ruby
const points = games => games.reduce((prev, current) => {
    return prev += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)
```