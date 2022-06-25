type ErrorMessageProps = {
  message: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const {
    message,
  } = props;

  return (
    <div className="flex flex-col w-full">
      <p className="font-bold text-xl text-center text-primary-600 leading-6">
        Nothing to see here
      </p>
      <p className="text-base text-center text-primary-300">
        {message}
      </p>
    </div>
  )

}