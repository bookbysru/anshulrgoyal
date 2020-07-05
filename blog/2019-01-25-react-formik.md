---
title: Creating Forms In React With Formik And Yup
id: react-formik
author: Anshul Goyal
author_url: https://github.com/anshulrgoyal
author_image_url: /img/anshul.jpg
tags: [formik, rect, yup]
image: https://cdn-images-1.medium.com/max/8992/0*FtmrJ9x7DT7XVaKD
---

Forms are a very important part of any application. Forms are used everywhere from login to search.

## List Of Content

- Introduction to Formik

- Introduction to Yup

- Creating a Simple Form Markup

- Using Formik With Simple Form

- Adding Reset Button

- Adding Validation

- Handling Submit

- Conclusion

<!--truncate-->

**Useful tip:** Use [\*\*Bit](https://bit.dev?utm_medium=content&utm_source=bitsandpieces&utm_content=1&utm_campaign=rsrch_msg_jul)** to encapsulate components with all their dependencies and setup. Build truly modular applications with better code reuse, simpler maintenance and less overhead.
[**Share reusable code components as a team · Bit\*\*
*Easily share reusable components between projects and applications to build faster as a team. Collaborate to develop…*bit.dev](https://bit.dev?utm_medium=content&utm_source=bitsandpieces&utm_content=1&utm_campaign=rsrch_msg_jul)

## Introduction

**ReactJS** is a library. It does not include a pre-baked solution to handle the form’s state and actions. Forms in the ReactJS can be a pain with all those repetition and business logic at the same time. **Formik** handles form state and **Yup** handles validation so we can focus our business logic.

### What is Formik?

Formik is a library which manages the state of the form. The state of the form means the error and value for every field and many more. Formik provides a mechanism to validate the field by passing a function.

![Formik](https://cdn-images-1.medium.com/max/2400/1*Jy7lJxq1JegkQpzYTecW0A.png)_Formik_

### What is Yup?

Yup is a validation library. It can be used to validate object , array , string and almost every JavaScript data structure. We would use it to validate our input.

## Let Us Get To Code

We would convert our simple form which does not do anything to an interactive well-built form with formik.

![Simple form](https://cdn-images-1.medium.com/max/2000/1*qflnAnPU2UZgcSWOHJKo6A.png)_Simple form_

To use Formik we just need to follow these steps

- Wrap the form with Formik component from the formik package.

- Replace input with fields as it provides more control over the state.

- Added onChange and value event handler which is also provided by the Formikcomponent as a prop.

The state of form is handled by Formik so it would make sense the values of field and change events should be handled by the Formik.

### Using Formik

We need to pass certain props to fromik for it to work.

- The component to be rendered or the function to be invoked while rendering form or children it needs to display. Formik only manages state and validation. It does not manages rendering of the form elements.

- onSubmit handler for the form.

- initalValue of the state of the form.

### Form With Formik

Now we would see what our form look like now.

![Form State handled by Formik](https://cdn-images-1.medium.com/max/2160/1*ABPDZLXqgi1Qs8gaknUomw.png)_Form State handled by Formik_

Let look at the props passed to the Formik. The initalValues specify the initial state of the form. onSubmit specify the function invoked with values of form and action that can be performed on the state of the form. The change is also handled by the formik by providing props.handleChange method and the updated value by providing props.values .

The Field is just a wrapper around the input tags and can be used to render any input component from select , checkbox to radio button. We can just do something like it. You can checkout[ Formik Docs](https://jaredpalmer.com/formik/docs/api/field) for more information.

    <Field component="select" name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </Field>

### Different Methods To Render Forms

Formik support there different methods to render a form. render prop can be used, a function is provided as a prop which returns an react node. Form can be passed as a children, children should be a function which returns a react node. component prop is also available, the component which is to be rendered can be provided.

    <Formik
    ...props
    component={Form}
    />
    or
    <Formik
    ...props
    render={()=><Form />}
    or
    <Formik ...props >
     ()=><Form />
    </Formik>

### Adding Reset To Form

We have to just add a button which calls the handleReset method supplied by Formik. Now the magic of Formik will blow your mind.

    <button
      disabled={!props.dirty}
      onClick={props.handleReset}
      type="button"
      className={s.button}
    >
      Reset
    </button>

We have a working reset button.

![Reset Working](https://cdn-images-1.medium.com/max/2000/1*qxlfT9R_BFRgnufc2FxmYw.gif)_Reset Working_

### Adding Validation

We would be using Yup to valid our inputs first, we should construct a schema for validation of the object.

    import * as yup from 'yup'

Now we can use yup.object ,yup.string etc. Let us create one for our form.

    **const userSchema = yup.object().shape({
      name: yup.string().required("Name is Required."),
      email: yup
        .string()
        .email("Please Enter an valid Email")
        .required("Email is Required."),
      password: yup
        .string()
        .required("Password is Required.")
        .max(13,"Too long")
        .min(8,"Too short")
    })**

So expect our value to be an object and shape specify the keys which should be there and what should be the type of the key and what should be their length etc. **Yup** can be used to create an awesome schema to validate anything. Here is the documentation for [Yup](https://github.com/jquense/yup/blob/master/README.md).

We show an error if our field has been touched and has an error using props provided by formik.

### Handling Form Submit

Till now we were just logging the data. We can use this data in any way. We can make an API request or save data for the next step. We can use the form submit state to show loading or disable the submit button. Now let see how it is used.

We change the state to submitting and show loader and we can use setTimeout to mimic the API behavior. The submitting State is provided as a prop same as the errors and other states like dirty or others.

![Form in action](https://cdn-images-1.medium.com/max/2560/1*WOphSQn9px06prgws1gTwA.gif)_Form in action_

### Let Us Go through The Flow

We use the submit button to submit the form and reset to reset it. We use the setUser to change the component state and use it in our details. We use Yup to validate our inputs.

## Conclusion

We saw Formik in action but it is just a tip of the iceberg and you can dive in Formik and configure it to control every aspect of your form and use it to configure validation pattern, flow etc.Formik is extremely configurable and very simple to use and setup. You can get a fully working form in very few line of code.

## If you are wondering how I have set my react project please do check my previous blog

## Bonus

All the code of the Form for you:).
[**anshulgoyal15/Formik-Blog**](https://github.com/anshulgoyal15/Formik-Blog)
