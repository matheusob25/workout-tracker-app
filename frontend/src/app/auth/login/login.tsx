import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
// import { ActionState } from '@/lib/auth/middleware';

export function login({mode = 'signin'}: {mode?: 'signin' | 'signup'}) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  // const [state, formAction, pending] = useActionState<ActionState, FormData>(
  //   mode === 'signin' ? signIn : signUp, 
  //   {error: ''} );
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
      </div>
    </div>
  );
}
