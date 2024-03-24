import { Spinner } from "./spinner"

interface OverlaySpinnerProps {
  loading: boolean
}

export function OverlaySpinner({ loading }: OverlaySpinnerProps) {
  if (loading) {
    return (
      <div className="spinnerOverlay">
        <div>
          <Spinner />
        </div>
      </div>
    )
  }
  return null
}
