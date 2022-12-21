import { useForm } from 'react-hook-form';
import './form.css';
import { ErrorMessage } from '@hookform/error-message';

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  console.log('something');
  const onSubmit = (data) => {
    console.log(data);
    setError();
  };

  return (
    <div className="add-user-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            className="form-control"
          />
          {errors.name?.type === 'maxLength' && (
            <p role="alert" className="error-message">
              Name should be of max length 20
            </p>
          )}
          {errors.name?.type === 'required' && (
            <p role="alert" className="error-message">
              Name is required
            </p>
          )}
          <ErrorMessage errors={errors} name="name" />

          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            {...register('age', { required: true, min: 18, max: 99 })}
            className="form-control"
          />
          {errors.age?.type === 'required' && (
            <p role="alert" className="error-message">
              Age is required
            </p>
          )}
          {errors.age?.type === 'min' && (
            <p role="alert" className="error-message">
              Min age is 18
            </p>
          )}
          {errors.age?.type === 'max' && (
            <p role="alert" className="error-message">
              Max age is 18
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              {...register('gender')}
              type="radio"
              value="male"
              id="male"
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              {...register('gender', { required: true })}
              type="radio"
              value="female"
              id="female"
              className="form-check-input"
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>

          {errors.gender?.type === 'required' && (
            <p role="alert" className="error-message">
              Gender is required
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Rank:</label>
          <input
            className="form-control"
            {...register('rank', { required: true }, { min: 18, max: 99 })}
          />
          {errors.rank?.type === 'required' && (
            <p role="alert" className="error-message">
              Rank is required
            </p>
          )}
          {errors.rank?.type === 'min' && (
            <p role="alert" className="error-messrank">
              Min rank is 18
            </p>
          )}
          {errors.rank?.type === 'max' && (
            <p role="alert" className="error-message">
              Max rank is 18
            </p>
          )}
        </div>
        <div className="form-group btn-container">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
