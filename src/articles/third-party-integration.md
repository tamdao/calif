# Third Party Integration

Mixing 3rd party integrations/libraries with React

In this example we'll see how to mix React and jQuery's UI plugin.
We pick tag-it jQuery plugin for the example. It transforms an unordered list to input field for managing tags:

```html
<ul>
  <li>JavaScript</li>
  <li>CSS</li>
</ul>
```

To make it work we have to include jQuery, jQuery UI and the tag-it plugin code. It works like that:

```javascript
$('<dom element selector>').tagit()
```

We select a DOM element and call tagit().

The very first thing that we have to do is to force a single-render of the Tags component.
That's because when React adds the elements in the actual DOM we want to pass the control of them to jQuery.
If we skip this both React and jQuery will work on same DOM elements without knowing for each other. To achieve a single-render we have to use the lifecycle method `shouldComponentUpdate`

Let's say that we want to programmatically add a new tag to the already running tag-it field.
Such action will be triggered by the React component and needs to use the jQuery API.
We have to find a way to communicate data to Tags component but still keep the single-render approach.
To illustrate the whole process we will add an input field to the App class and a button which if clicked will pass a string to Tags component.

```javascript
class App extends React.Component {
  constructor(props) {
    super(props)

    this._addNewTag = this._addNewTag.bind(this)
    this.state = {
      tags: ['JavaScript', 'CSS'],
      newTag: null,
    }
  }

  _addNewTag() {
    this.setState({ newTag: this.refs.field.value })
  }

  render() {
    return (
      <div>
        <p>Add new tag:</p>
        <div>
          <input type="text" ref="field" />
          <button onClick={this._addNewTag}>Add</button>
        </div>
        <Tags tags={this.state.tags} newTag={this.state.newTag} />
      </div>
    )
  }
}
```

We use the internal state as a data storage for the value of the newly added field.
Every time when we click the button we update the state and trigger re-rendering of Tags component.
However, because of shouldComponentUpdate we update nothing.
The only one change is that we get a value of the newTag prop which may be captured via another lifecycle method - componentWillReceiveProps

```javascript
class Tags extends React.Component {
  componentDidMount() {
    this.list = $(this.refs.list)
    this.list.tagit()
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(newProps) {
    this.list.tagit('createTag', newProps.newTag)
  }

  render() {
    return (
      <ul ref="list">
        {this.props.tags.map((tag, i) => (
          <li key={i}>{tag} </li>
        ))}
      </ul>
    )
  }
}
```

### Related links:

- https://github.com/krasimir/react-in-patterns/tree/master/patterns/third-party
