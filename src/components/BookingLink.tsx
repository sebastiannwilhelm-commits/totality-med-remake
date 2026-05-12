import type { AnchorHTMLAttributes } from "react";

import { OFFICIAL } from "@/config/official";

type BookingLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Same destination as “Book Now” / “Book Appointment” on totalitymed.com
 * (MyPatientNow patient portal).
 */
export function BookingLink({ children, ...props }: BookingLinkProps) {
  return (
    <a
      href={OFFICIAL.booking}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
