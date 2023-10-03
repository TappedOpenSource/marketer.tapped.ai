
import type { MarketingForm } from '@/types/marketing_form';
import type { MarketingPlan } from '@/types/marketing_plan';

import { doc, collection, setDoc, onSnapshot } from '@firebase/firestore';
import { db } from '@/utils/firebase';

const GUEST_PLANS_COLLECTION = 'guestMarketingPlans';
const FORMS_COLLECTION = 'marketingForms';

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
  try {
    const collectionRef = collection(db, FORMS_COLLECTION);
    const docRef = doc(collectionRef, form.id);
    await setDoc(docRef, form);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
