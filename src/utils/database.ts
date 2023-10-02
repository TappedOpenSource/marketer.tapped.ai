
import type { MarketingForm } from '@/types/marketing_form';
import type { MarketingPlan } from '@/types/marketing_plan';

import { doc, setDoc, onSnapshot } from '@firebase/firestore';
import { db } from '@/utils/firebase';

const GUEST_PLANS_COLLECTION = 'guest_marketing_plans';
const FORMS_COLLECTION = 'marketing_forms';

export function marketingPlanListener(
  clientReferenceId: string,
  callback: (data: MarketingPlan) => void,
) {
  console.log({ clientReferenceId });
  const docRef = doc(db, GUEST_PLANS_COLLECTION, clientReferenceId);
  onSnapshot(docRef, (doc) => {
    const marketingPlan = doc.data() as MarketingPlan;
    console.log({ marketingPlan });
    callback(marketingPlan);
  });
}

export async function createEmptyMarketingPlan({ clientReferenceId }: {
    clientReferenceId: string;
}) {
  console.log({ clientReferenceId });
  const marketingPlan: MarketingPlan = {
    clientReferenceId,
    status: 'initial',
  };

  const docRef = doc(db, GUEST_PLANS_COLLECTION, clientReferenceId);
  await setDoc(docRef, marketingPlan);
}

export async function saveForm(form: MarketingForm) {
  console.log({ form });
  // save form data to firestore
  const docRef = doc(db, FORMS_COLLECTION, form.id);
  await setDoc(docRef, form);
}
