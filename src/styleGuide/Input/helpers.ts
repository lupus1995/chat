import {
  RulesValidationInterface,
  RuleValidationInterface,
} from '../../rulesValidation/interfaces';

export function validation({
  val,
  setError,
  setMessage,
  rules,
}: {
  val: string;
  setError: (error: boolean) => void;
  setMessage: (message: string) => void;
  rules: RulesValidationInterface;
}) {
  let rule: RuleValidationInterface | undefined;
  const {
    requiredInputRules,
    emailRules,
    lineLengthRules,
    checkPassword,
  } = rules;
  if (typeof requiredInputRules === 'function') {
    rule = requiredInputRules({
      firstClickByInput: val.length === 0,
    });

    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return;
    }
  }

  if (typeof lineLengthRules === 'function') {
    rule = lineLengthRules({ string: val });
    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return;
    }
  }

  if (typeof emailRules === 'function') {
    rule = emailRules({ string: val });
    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return;
    }
  }

  // if (typeof checkPassword === 'function') {
  //   rule = checkPassword({ string: val });
  //   if (rule.rule) {
  //     setError(rule.rule);
  //     setMessage(rule.message);
  //     return;
  //   }
  // }

  setError(false);
  setMessage('');
}
