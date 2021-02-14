

export const required = value => value ? undefined : 'required';
// const minLen10 = minLength(10) validate={[minLen10]}
export const minLength = min => value => value && value.length < min ? `min length ${min}, your str ${value.length}` : undefined;